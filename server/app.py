from flask import Flask, request, jsonify
from models.student import Student
from models.ticket import Ticket


app = Flask(__name__)

students = []
student_id_control = 1

@app.route("/alunos", methods=['POST'])
def create_student():
    global student_id_control
    data = request.get_json()
    new_student = Student(id=student_id_control,nome=data['nome'], senha=data['senha'], matricula=data.get("matricula", ''))
    student_id_control += 1
    students.append(new_student)

    return jsonify({"message":"Novo aluno cadastrado com sucesso", "id_student":new_student.id})

@app.route("/alunos/<int:id>", methods=['GET'])
def get_student(id):
        for s in students:
            if s.id == id:
                return jsonify(s.to_dict())
    
        return jsonify({"message":"Não foi possível encontrar a atividade"}), 404


@app.route("/alunos", methods=['GET'])
def get_students():
    student_list = [student.to_dict() for student in students]
    total_students = students.__len__()
    output = {
        "students": student_list,
        "total_students": total_students
    }

    return output, 200



if __name__ == '__main__':
    app.run(debug=True)