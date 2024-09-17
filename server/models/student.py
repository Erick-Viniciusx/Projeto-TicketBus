class Student:
    def __init__(self, id:int, nome:str, matricula:str, senha:str) -> None:
        self.id = id
        self.nome = nome
        self.matricula = matricula
        self.senha = senha

    
    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "matricula": self.matricula,
            "senha": self.senha
        }