import { Injectable } from '@angular/core';

import { Matricula } from '../../models/matricula';

@Injectable()
export class MatriculaProvider {
  matriculas: Matricula[] = [];
  matriculasHistorico: Matricula [] = [];

  constructor() {
    let matriculas = [
      {
        "status": "PreMatricula",
        "turma": {
            "codigo": "A",
            "disciplina": {
                "nome": "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
                "codigo": "ENE0022",
                "cargaHoraria": 60,
                "unidade": "ENE"
            },
            "horarios": [
              {
                "dia": "SEG",
                "horaInicio": "10:00",
                "horaFim": "10:00"
              },
              {
                "dia": "QUA",
                "horaInicio": "10:00",
                "horaFim": "11:50"
              }
            ],
            "professores": [
              {
                "nome": "UGO SILVA DIAS"
              }
            ]
          }    
      },
      {
        "status": "PreMatricula",
        "turma": {
            "codigo": "A",
            "disciplina": {
                "nome": "FUNDAMENTOS DE REDES",
                "codigo": "ENE0274",
                "cargaHoraria": 60,
                "unidade": "ENE"
            },
            "horarios": [
              {
                "dia": "SEG",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              },
              {
                "dia": "QUA",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              }
            ],
            "professores": [
              {
                "nome": "FABIO LUCIO LOPES DE MENDONCA"
              }
            ]
          }    
      },
      {
        "status": "PreMatricula",
        "turma": {
            "codigo": "C",
            "disciplina": {
                "nome": "FISICA 2 EXPERIMENTAL",
                "codigo": "IFD0177",
                "cargaHoraria": 60,
                "unidade": "IFD"
            },
            "horarios": [
              {
                "dia": "TER",
                "horaInicio": "14:00",
                "horaFim": "15:50"
              },
              {
                "dia": "TER",
                "horaInicio": "16:00",
                "horaFim": "16:50"
              }
            ],
            "professores": [
              {
                "nome": "FERNANDO LESSA CARNEIRO"
              }
            ]
          }    
      },
      {
        "status": "PreMatricula",
        "turma": {
            "codigo": "J",
            "disciplina": {
                "nome": "CÁLCULO 3",
                "codigo": "MAT0027",
                "cargaHoraria": 90,
                "unidade": "MAT"
            },
            "horarios": [
              {
                "dia": "TER",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              },
              {
                "dia": "QUI",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              },
              {
                "dia": "SEX",
                "horaInicio": "08:00",
                "horaFim": "09:50"
              }
            ],
            "professores": [
              {
                "nome": "RADERSON RODRIGUES DA SILVA"
              }
            ]
          }    
      },
    ];

    for (let matricula of matriculas) {
      this.matriculas.push(new Matricula(matricula));
    }

    let matriculasHistorico = [
      {
        "status": "PreMatricula",
        "turma": {
            "codigo": "A",
            "disciplina": {
                "nome": "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
                "codigo": "ENE0022",
                "cargaHoraria": 60,
                "unidade": "ENE"
            },
          },
          "dataHora": "2020-03-01T12:00:03"
      },
      {
        "status": "PreMatricula",
        "turma": {
            "codigo": "A",
            "disciplina": {
                "nome": "FUNDAMENTOS DE REDES",
                "codigo": "ENE0274",
                "cargaHoraria": 60,
                "unidade": "ENE"
            },
          },
          "dataHora": "2020-03-01T12:00:03"    
      },
      {
        "status": "PreMatricula",
        "turma": {
            "codigo": "C",
            "disciplina": {
                "nome": "FISICA 2 EXPERIMENTAL",
                "codigo": "IFD0177",
                "cargaHoraria": 60,
                "unidade": "IFD"
            },
          },
          "dataHora": "2020-03-01T12:00:03"
      },
      {
        "status": "PreMatricula",
        "turma": {
            "codigo": "J",
            "disciplina": {
                "nome": "CÁLCULO 3",
                "codigo": "MAT0027",
                "cargaHoraria": 90,
                "unidade": "MAT"
            },
          },
          "dataHora": "2020-03-01T12:00:03"
      },
    ];
  
    for (let matriculaHistorico of matriculasHistorico) {
      this.matriculasHistorico.push(new Matricula(matriculaHistorico));
    }

  }

  search(params?: any) {
    if (!params) {
        return this.matriculas;
    }

    return this.matriculas.filter((matricula) => {
      for (let key in params) {
        let field = matricula[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return matricula;
        } else if (field == params[key]) {
          return matricula;
        }
      }
      return null;
    });
  }

  searchHistorico() {
      return this.matriculasHistorico;
  }

  add(matricula: Matricula) {
    var matricula: Matricula = {
      turma: matricula.turma,
      status: matricula.status,
      prioridade: matricula.prioridade
    }
    this.matriculas.push(matricula);
  }

  addHistorico(matricula: Matricula) {
    var matriculaHistorico = new Matricula(matricula);
    matriculaHistorico.dataHora = this.toISOLocal(new Date());
    this.matriculasHistorico.push(matriculaHistorico);
  }

  delete(matricula: Matricula) {
    this.matriculas.splice(this.matriculas.indexOf(matricula), 1);
  }

  updateStatus(matricula: Matricula, status: string) {
    for(let matriculaAluno of this.matriculas) {
      if(matricula.turma.disciplina.codigo == matriculaAluno.turma.disciplina.codigo &&
         matricula.turma.codigo == matriculaAluno.turma.codigo &&
         matricula.status == matriculaAluno.status) {
        matriculaAluno.status = status;
      }  
    }  
  }

  // Tasks
  confirmarMatricula() {
    this.matriculas = this.matriculas.filter(matricula => {
      if(matricula.status=='Cancelado') {
        this.addHistorico(matricula);
      }
      else {
        return matricula;
      }
    });

    for(let matricula of this.matriculas) {
      if(matricula.status == undefined) {
        matricula.status = 'Pedido';
        this.addHistorico(matricula);
      }  
      else if (matricula.status == 'Confirmado') {
        matricula.status = 'Matriculado';
        this.addHistorico(matricula);
      }  
      else if (matricula.status == 'Retirado') {
        matricula.status = 'Retirado-Aluno';
        this.addHistorico(matricula);
      }  
    }
  }

  // Util
  toISOLocal(d) {
    var z  = n =>  ('0' + n).slice(-2);
    var zz = n => ('00' + n).slice(-3);
    var off = d.getTimezoneOffset();
    var sign = off < 0? '+' : '-';
    off = Math.abs(off);
  
    return d.getFullYear() + '-'
           + z(d.getMonth()+1) + '-' +
           z(d.getDate()) + 'T' +
           z(d.getHours()) + ':'  + 
           z(d.getMinutes()) + ':' +
           z(d.getSeconds());
  }
  
}
