// fetch("https://jsonplaceholder.typicode.com/posts/p")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Gagal mendapatkan API");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Error bro: ${error.message}`);
//   });

// const isi = {
//   title: "nama saya siapa",
//   body: "ini adalah body",
//   userId: 3,
// };

// fetch("https://jsonplaceholder.typicode.com/postsl", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(isi),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data, "berhasil dikirim"))
//   .catch((error) => console.error("erronya ini bro :", error.message));

// ASYNC WITH TRYCACTH
// async function getPost() {
//   try {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     if (!res.ok) {
//       throw new Error("Wah tidak bisa konek bro");
//     }

//     const data = await res.json();
//     console.log("Datanya : ", data);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getPost();

axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((data) => console.log("Tampilan axios", data))
  .catch((error) => console.error(error.message));
