/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let wishlist = [];
let cart = [];

function createModal(title, items) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const content = document.createElement('div');
    content.classList.add('modal-content');

    const heading = document.createElement('h2');
    heading.innerText = title;
    content.appendChild(heading);

    const itemsContainer = document.createElement('div');
    itemsContainer.classList.add('modal-items');

    items.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('modal-img');
        itemsContainer.appendChild(img);
    });

    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'Close';
    closeBtn.classList.add('close-btn');
    closeBtn.onclick = () => document.body.removeChild(modal);

    content.appendChild(itemsContainer);
    content.appendChild(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
}

function setupButtons() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const imgSrc = item.querySelector('img').src;
        const buttons = item.querySelectorAll('.heart-item img');

        buttons[0].addEventListener('click', () => {
            wishlist.push(imgSrc);
        });

        buttons[1].addEventListener('click', () => {
            cart.push(imgSrc);
        });
    });

    document.querySelector('.header-buttons img[alt="Wish List Icon"]').addEventListener('click', () => {
        createModal('Wishlist', wishlist);
    });

    document.querySelector('.header-buttons img[alt="Cart Icon"]').addEventListener('click', () => {
        createModal('Cart', cart);
    });
}

document.addEventListener('DOMContentLoaded', setupButtons);




//footer part
              const phoneBtn = document.getElementById("phoneBtn");
                const mailBtn = document.getElementById("mailBtn");
                const chatBtn = document.getElementById("chatBtn");

                const popupPhone = document.getElementById("popupPhone");
                const popupMail = document.getElementById("popupMail");
                const popupChat = document.getElementById("popupChat");

                function closePopup()
                {
                    popupPhone.style.display = "none";
                    popupMail.style.display = "none";
                    popupChat.style.display = "none";
                }

                phoneBtn.onclick =
                        function ()
                        {
                            closePopup();
                            popupPhone.style.display = "block";
                        };

                mailBtn.onclick =
                        function ()
                        {
                            closePopup();
                            popupMail.style.display = "block";
                        };

                chatBtn.onclick = function ()
                {
                    closePopup();
                    popupChat.style.display = "block";
                };
                
                