const prompt = require('prompt-sync')();
const fs = require('fs');
const DBHotels_FILE_PATH = '../db/table_hotels';
const DBResavation_FILE_PATH = '../db/table_reservations';

let hotels = readDBHotels();
let reservations = readDBReservations();


function readDBHotels(){
  const dbString = fs.readFileSync(DBHotels_FILE_PATH, "utf-8");
  const db = JSON.parse(dbString || "{}");
  if (!db.hotels) {
    return [];
  }
  return db.hotels;
}
 function readDBReservations(){
  const dbString = fs.readFileSync(DBResavation_FILE_PATH, "utf-8");
  const db = JSON.parse(dbString || "{}");
  if (!db.reservations) {
    return [];
  }
  return db.reservations;
}

function updateHotelInFile(updatedHotel) {
  const dbString = fs.readFileSync(DBHotels_FILE_PATH, "utf-8");
  const db = JSON.parse(dbString || "{}");

  db.hotels.forEach(hotel => {
      if (hotel.id === updatedHotel.id) {
          hotel.availableRooms = updatedHotel.availableRooms;
      }
  });

  fs.writeFileSync(DBHotels_FILE_PATH, JSON.stringify(db, null, 2));
}

function findHotelById(hotelId) {
  for (let i = 0; i < hotels.length; i++) {
      if (hotels[i].id === hotelId) {
          return hotels[i];
      }
  }
  return null;
}
function findHotelByCity(city){
  let found = false;
  for (let i = 0; i < hotels.length; i++) {
    if (hotels[i].city.toLowerCase() === city.toLowerCase()) {
      console.log(hotels[i]);
      found = true;
    }
  }
  if (!found) {
    console.log(`Nenhum hotel encontrado em ${city}`);
  }
}

function findReservationIndexById(reservationId) {
  for (let i = 0; i < reservations.length; i++) {
      if (reservations[i].reservationId === reservationId) {
          return i;
      }
  }
  return -1; // Retorna -1 se a reserva não for encontrada
}

function addHotel( name, city, totalRooms, availableRooms){
  let idHotel = hotels.length > 0 ? hotels[hotels.length - 1].id + 1 : 1;
  let newHotel = {
    id: idHotel,
    name: name,
    city: city,
    totalRooms: totalRooms,
    availableRooms: availableRooms
  };
  hotels.push(newHotel);
  fs.writeFileSync(DBHotels_FILE_PATH, JSON.stringify({ hotels: newHotel}, null, 2));

  console.log(`${name} adicionado com sucesso!`);
}


function makeReservation(hotelId, customerName){
  const hotel = findHotelById(hotelId);

  if (hotel) {
      if (hotel.availableRooms > 0) {
          const newReservationId = reservations.length > 0 ? reservations[reservations.length - 1].reservationId + 1 : 1;
          const newReservation = {
              reservationId: newReservationId,
              hotelId: hotelId,
              customerName: customerName
          };
          reservations.push(newReservation);
          hotel.availableRooms--;
          updateHotelInFile(hotel);
          console.log(`Reserva feita com sucesso para ${customerName} no ${hotel.name}`);
      } else {
          console.log(`Não há quartos disponíveis no ${hotel.name}`);
      }
  } else {
      console.log(`Hotel com ID ${hotelId} não encontrado`);
  }
}

function cancelReservation(reservationId){
  const reservationIndex = findReservationIndexById(reservationId);
  if (reservationIndex !== -1) {
    const reservation = reservations[reservationIndex];
    const hotel = findHotelById(reservation.hotelId);
    if (hotel) {
        hotel.availableRooms++;
        reservations.splice(reservationIndex, 1);
        updateHotelInFile(hotel);
        console.log(`Reserva ${reservationId} cancelada com sucesso`);
    } else {
        console.log(`Hotel com ID ${reservation.hotelId} não encontrado`);
    }
  } else {
    console.log(`Reserva com ID ${reservationId} não encontrada`);
  }
}

function showReservations(){
  for (let i = 0; i < reservations.length; i++) {
    for (let j = 0; j < hotels.length; j++) {
      if (reservations[i].hotelId === hotels[j].id) {
        console.log(`ID da Reserva: ${reservations[i].reservationId}, Cliente: ${reservations[i].customerName}, Hotel: ${hotels[j].name}, Cidade: ${hotels[j].city}`);
      }
    }
  }
}


function hotelsSystem() {
  while (true) {
    console.log("1. Adicionar Hotel");
    console.log("2. Buscar Hotéis por Cidade");
    console.log("3. Fazer Reserva");
    console.log("4. Cancelar Reserva");
    console.log("5. Listar Reservas");
    console.log("6. Sair");

    const escolha = prompt("Escolha uma opção: ");

    switch (escolha) {
      case '1':
        const name = prompt("Digite o nome do hotel: ");
        const city = prompt("Digite a cidade do hotel: ");
        const totalRooms = parseInt(prompt("Digite o número total de quartos: "));
        const availableRooms = parseInt(prompt("Digite o número de quartos disponíveis: "));
        addHotel(name, city, totalRooms, availableRooms);
        break;

      case '2':
        const citySearch = prompt("Digite a cidade para buscar hotéis: ");
        findHotelByCity(citySearch);
        break;

      case '3':
        const hotelId = parseInt(prompt("Digite o ID do hotel para fazer a reserva: "));
        const customerName = prompt("Digite o nome do cliente: ");
        makeReservation(hotelId, customerName);
        break;

      case '4':
        const reservationId = parseInt(prompt("Digite o ID da reserva para cancelar: "));
        cancelReservation(reservationId);
        break;

      case '5':
        showReservations();
        break;

      case '6':
        console.log("Saindo...");
        return;

      default:
        console.log("Opção inválida. Por favor, tente novamente.");
    }
  }
}

hotelsSystem();