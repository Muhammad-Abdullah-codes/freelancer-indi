
const sectionHTML = `
            <section class="bor mx-5 p-6 mb-5">
    <div class="flex gap-5  mb-5">
      <img src="img/Ellipse 2.png" alt="">
      <div>
        <p class="font-bold">Dr Ruwan Perera</p>
        <p class="text-gray-400">Science</p>
      </div>
    </div>
    <p class="text-blue-500 font-bold">Best Online English Medium Classes</p>
    <p class="bg-gray-50 mt-2 p-2">
      CLASSES~ENGLISH~HISTORY~ SCIENCE~HEALTH~CIVICS~ GEOGRAPHYFor each subject~Unit papers~Revision~Past papers~Colombo school papers~Short notesText or call on whatsapp for further details-</p>
      <div class="flex gap-2 mt-4">
        <button class="flex items-center but3 font-bold gap-2 bg-purple-100 px-3 py-1"><img width="18" src="img/dashboard.png" alt=""> Dashboard</button>
        <button class="flex items-center but4 font-bold gap-2 bg-orange-100 px-3 py-1"><img width="18" src="img/dot.png" alt=""> Medium</button>
      </div>
      <p class="text-gray-400 mt-5">2024-12-12</p>
  </section>
        `;

const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');

for (let i = 0; i < 7; i++) {
 container1.innerHTML += sectionHTML;
 if (i < 3) {
  container2.innerHTML += sectionHTML;
 }
}

const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageNumber = document.getElementById('page-number');

    let currentPage = 1;

    function updateContainers() {
      if (currentPage === 1) {
        container1.classList.remove('hidden');
        container2.classList.add('hidden');
      } else if (currentPage === 2) {
        container1.classList.add('hidden');
        container2.classList.remove('hidden');
      }
      pageNumber.textContent = currentPage;
    }

    nextButton.addEventListener('click', () => {
      if (currentPage < 2) {
        currentPage++;
        updateContainers();
      }
    });

    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        updateContainers();
      }
    });

    updateContainers();
