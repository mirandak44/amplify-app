import './Card.css';

const Card = () => {
  return (
    <article>

    <div class="container">

    <div class="card text-white bg-primary mb-3" style={{ width: '18rem' }}>
    <div class="card-body">
      <h5 class="card-title">Card 1</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    
    <div class="card text-white bg-warning mb-3" style={{ width: '18rem' }}>
    <div class="card-body">
      <h5 class="card-title">Card 2</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
 

  <div class="card text-white bg-info mb-3" style={{ width: '18rem' }}>
    <div class="card-body">
      <h5 class="card-title">Card 3</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>

  </div>
  </article>
  );
};

export default Card;