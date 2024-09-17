class Ticket:
    def __init__(self, id:int, codigo:int, valid=True) -> None:
        self.id = id
        self.codigo = codigo
        self.valid = valid

    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "completed": self.completed
        }