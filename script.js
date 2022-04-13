const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const testimony = document.querySelector(".testimony");
const personImage = document.querySelector(".person-image");
const personName = document.querySelector(".person-name");
const personRole = document.querySelector(".person-role");

let clicked = true;

function change() {
  if (clicked) {
    personImage.src = "images/image-john.jpg";
    testimony.textContent = `If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer.`;
    personName.textContent = "John Tarkpor";
    personRole.textContent = "Junior Front-end Developer";
  } else {
    personImage.src = "images/image-tanya.jpg";
    testimony.textContent = `“ I’ve been interested in coding for a while but never taken the
        jump, until now. I couldn’t recommend this course enough. I’m now in
        the job of my dreams and so excited about the future. ”`;
    personName.textContent = "Tanya Sinclair";
    personRole.textContent = "UX Engineer";
  }

  clicked = !clicked;
}

nextBtn.addEventListener("click", change);
prevBtn.addEventListener("click", change)
