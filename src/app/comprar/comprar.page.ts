import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import compra from '../../app/domain/compra';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {
  titulo;
  preco;
  image;


  constructor(private Alert:AlertController, private nav:NavController, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {}

  mostrarHotdog() {
    const titulo = this.route.snapshot.params.id;
    const preco = this.route.snapshot.params.preco;
    const image = this.route.snapshot.params.image;
    this.titulo = titulo;
    this.preco = preco;
    this. image = image;
  }

  ionViewDidEnter() { 
    this.mostrarHotdog();
  }

voltar() {
    this.Alert.create({
      header: "Pedido finalizado com sucesso, pagamento será realizado na entreaga",
      buttons: [{
        text: "OK",
        handler: () => {
          this.nav.back();
        }
      }]
    }).then(Alert => {
      Alert.present()
    })
  }

  buscar(cep) {
    const cepString = cep.el.value
    if(cepString === '' || cepString.length !== 8 || !cepString.match(/^\d+$/g)) {
      console.log("CEP inválido");
    }else {
      console.log("CEP válido")
      let retorno = fetch('https://viacep.com.br/ws/' + cepString + '/json')
      console.log("Enviando requisição...")
      retorno.then(dados => {
        return dados.json()
      }).then(endereco => {
        if(endereco.erro) {
          console.error("CEP Inexistente")
        }else {
          this.Alert.create({
            header: "Seu endereço está correto:",
            subHeader: `${endereco.logradouro} , ${endereco.bairro},${endereco.localidade} - ${endereco.uf.toUpperCase()}`,
            buttons:[{
              text:'Não'
            },{
                text:'Sim',
                handler:() =>{
                  this.Alert.dismiss()
                  this.Alert.create({
                    header:"Qual o seu número?",
                    inputs:[{
                      name:"Numero",
                      type:"number"
                    }],
                    buttons:[{
                      text:'Cancelar',
                    },{
                      text:'Salvar',
                    }]
                  }).then(alert=>{
                    alert.present();
                  })
                }
              }
          ]
          }).then(alert => {
            alert.present()
          })
        }
      })
    }
  }

}