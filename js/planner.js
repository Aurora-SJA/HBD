// Array to hold the itinerary (this can be loaded from localStorage if needed)
let itinerary = JSON.parse(localStorage.getItem('itinerary')) || [];

// Function to add the selected plan
function addPlan() {
    const city = document.querySelector('.image-option.selected')?.id || 'Nenhuma cidade selecionada';
    const activity = document.querySelector('.image-option.selected')?.id || 'Nenhuma atividade selecionada';
    const food = document.querySelector('.image-option.selected')?.id || 'Nenhuma comida selecionada';

    // Add the selected plan to the itinerary array
    itinerary.push({ city, activity, food });

    // Store the updated itinerary in localStorage
    localStorage.setItem('itinerary', JSON.stringify(itinerary));

    // Render the updated itinerary
    renderItinerary();
}

// Function to render the saved itinerary
function renderItinerary() {
    const itineraryContainer = document.getElementById("itinerary");
    itineraryContainer.innerHTML = itinerary.length
        ? itinerary
              .map(
                  (item, index) =>
                      `<p>Você irá para <b>${item.city}</b>, fará a atividade de <b>${item.activity}</b> e comerá <b>${item.food}</b>.</p>`
              )
              .join("")
        : "<p>Nenhum planejamento ainda!</p>";
}

// Function to show a summary of the selected plans
function showSummary() {
    if (itinerary.length === 0) {
        alert("Nenhum plano adicionado ainda!");
        return;
    }

    const summary = itinerary
        .map(
            (item) =>
                `Você irá para ${item.city}, fará a atividade de ${item.activity} e comerá ${item.food}.`
        )
        .join("\n");

    alert(`Resumo do Planejamento:\n\n${summary}`);
}

// Initial render when the page loads
document.addEventListener("DOMContentLoaded", renderItinerary);

// Function to select the image for cities, activities, and food
function selectImage(id) {
    const images = document.querySelectorAll('#cities .image-option');
    images.forEach((img) => img.classList.remove('selected'));
    document.getElementById(id).classList.add('selected');
}

function selectActivity(id) {
    const activities = document.querySelectorAll('#activities .image-option');
    activities.forEach((activity) => activity.classList.remove('selected'));
    document.getElementById(id).classList.add('selected');
}

function selectFood(id) {
    const foods = document.querySelectorAll('#foods .image-option');
    foods.forEach((food) => food.classList.remove('selected'));
    document.getElementById(id).classList.add('selected');
}

// Function to reset the selections
function resetSelection() {
    document.querySelectorAll('.image-option').forEach((img) => img.classList.remove('selected'));
}
