const cardItem=document.querySelectorAll(".card-item");
cardItem.forEach((card)=>{
    card.addEventListener("click" , ()=>{
        cardItemRemove();
        card.classList.add("active")
    })
})

const cardItemRemove = () => {
    cardItem.forEach((card) => {
      card.classList.remove("active");
    });
  };

