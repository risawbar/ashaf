// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("data didapatkan");
//     }, 2000);
//   });
// }
// async function tampilkan() {
//   const data = await getData();
//   console.log(data);
// }

// tampilkan();

// CONTOH PENGGUNAAN PROMISE
// function cekstok(produk) {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       const stockAvailable = false;

//       if (stockAvailable) {
//         resolve(`${produk} tersedia`);
//       } else {
//         rejected(`${produk} tidak tersedia`);
//       }
//     }, 2000);
//   });
// }

// cekstok("Buku")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const apiKey = "8ec82b096821917266b95785f4754d01";

const locEl = document.querySelector("#location");
const tempEl = document.querySelector("#temperature");
const descEl = document.querySelector("#description");
const iconEl = document.querySelector("#weather-icon");

async function getWeather(lon, lat) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    locEl.textContent = data.name;
    tempEl.textContent = `${data.main.temp} °C`;
    descEl.textContent = data.weather[0].description;
    const iconCuaca = data.weather[0].icon;
    iconEl.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCuaca}.png">`;
    console.log(data);
  } catch (error) {
    console.error("Errornya: ", error.message);
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;
        getWeather(lon, lat);
      },
      (error) => {
       alert("GPSnya Nyalain Dulu Bosss");
      }
    );
  } else {
    alert("Geolocation is not support");
  }
}

window.onload = getLocation;
