import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-generate-pdf',
  standalone: true,
  imports: [],
  templateUrl: './generate-pdf.component.html',
  styleUrl: './generate-pdf.component.scss',
})
export class GeneratePdfComponent {
  generatePdf() {
    const doc = new jsPDF('p', 'mm', 'a4');
    const imgWidth: number = 80;
    const imgHeight: number = 50;
    const textWidth = { maxWidth: 170 };
    const tucumano: string =
      'El bosque tucumano-boliviano en Tarija ha sido poco estudiado, aunque se ha observado que la diversidad de especies arbóreas disminuye con la latitud. Un estudio reciente analizó la diversidad de especies en un gradiente altitudinal de 2,000 m en la alta cuenca del río Bermejo. Se registraron 2,758 individuos de 143 especies, con un pico de riqueza entre 900 y 1,200 m de altitud y una notable disminución a mayores altitudes. La diversidad fue alta, indicando un cambio significativo en las especies en áreas reducidas. Este estudio destaca la necesidad de más investigaciones para entender los cambios en la diversidad debido a las presiones ambientales recientes.';
    const imgTucumano: string = 'assets/img/forest/tucumano.webp';
    const pecari: string =
      'El pecarí (Pecari tajacu), conocido como jabalí americano, es un mamífero parecido a un cerdo que habita en bosques y selvas desde el sur de Estados Unidos hasta Sudamérica. Se caracteriza por su cuerpo robusto y pelaje oscuro con una banda blanca en el cuello. Viven en grupos familiares y son animales sociales que se comunican mediante gruñidos y olores. Su dieta incluye frutas, raíces y pequeños animales, desempeñando un papel importante como dispersores de semillas y contribuyendo a la diversidad vegetal en sus ecosistemas.';
    const imgPecari: string = 'assets/img/animal/pecaries.webp';
    const violeta: string =
      'La Violeta (Viola odorata) es una pequeña flor de color púrpura o azulada con un suave perfume. Originaria de Europa y Asia, simboliza humildad, modestia y lealtad. Florece a finales de invierno y principios de primavera, siendo apreciada en jardines y parques, y utilizada en la producción de perfumes y medicina natural por sus propiedades relajantes.';
    const imgVioleta: string = 'assets/img/flower/violeta.webp';
    const quirquincho: string =
      'El quirquincho es un armadillo (Chlamyphoridae) nativo de Sudamérica, particularmente en los Andes y el Gran Chaco. Existen varias especies, como el quirquincho andino y el quirquincho bola. Su caparazón rígido le permite enrollarse para protegerse de depredadores. Son nocturnos y se alimentan de insectos, raíces y pequeños invertebrados, contribuyendo a la salud del suelo al airearlo al excavar. Algunas especies están amenazadas debido a la pérdida de hábitat y la caza.';
    const imgQuirquincho: string = 'assets/img/species/quirquincho.webp';
    const pilcomayo: string =
      'El Río Pilcomayo es un importante río transfronterizo que fluye desde los Andes en Bolivia, atraviesa Paraguay y Argentina, y desemboca en el río Paraguay, con un recorrido de aproximadamente 1,100 kilómetros. Es crucial para las comunidades indígenas y rurales que dependen de él para agua, pesca y agricultura. La cuenca del Pilcomayo alberga una biodiversidad única, incluyendo especies como el dorado y el yacaré. Sin embargo, enfrenta desafíos significativos, como la contaminación minera, sedimentación y variabilidad en su caudal, que impactan tanto el medio ambiente como a las comunidades humanas.';
    const imgPilcomayo: string = 'assets/img/river/pilcomayo.webp';

    doc.setFontSize(22);
    doc.text('Biodiversidad de Tarija', 20, 20);

    doc.setFontSize(16);
    doc.text('Bosque tucumano', 20, 30);
    doc.text('Pecari', 20, 140);
    doc.text('Flor violeta', 20, 250);

    doc.setFontSize(12);
    doc.text(tucumano, 20, 40, textWidth);
    doc.addImage(imgTucumano, 'WEBP', 60, 80, imgWidth, imgHeight);

    doc.text(pecari, 20, 150, textWidth);
    doc.addImage(imgPecari, 'WEBP', 60, 190, imgWidth, imgHeight);

    doc.text(violeta, 20, 260, textWidth);
    doc.addPage();

    doc.setFontSize(16);
    doc.text('Quirquincho', 20, 80);
    doc.text('Río Pilcomayo', 20, 180);

    doc.setFontSize(12);
    doc.addImage(imgVioleta, 'WEBP', 60, 20, imgWidth, imgHeight);

    doc.text(quirquincho, 20, 90, textWidth);
    doc.addImage(imgQuirquincho, 'WEBP', 60, 120, imgWidth, imgHeight);

    doc.text(pilcomayo, 20, 190, textWidth);
    doc.addImage(imgPilcomayo, 'WEBP', 60, 230, imgWidth, imgHeight);

    doc.save('biodiversidad_tarija.pdf');
  }
}
