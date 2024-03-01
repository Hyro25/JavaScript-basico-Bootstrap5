export default function Card({ name, year, genre, stock = 0 }) {
    const btnClass = (stock) => (stock > 0 ? "btn-primary" : "btn-danger disabled")
    return `
    <div class="card my-2">
      <div class="card-body">
      <h5 class="card-title">${name.toUpperCase()} 
      </h5>
      <p class="card-text">${year}- ${genre}</p>
      <a href="#" class="btn ${btnClass(stock)}">
      Go somewhere</a>
    </div>
  </div>`;
  }

 