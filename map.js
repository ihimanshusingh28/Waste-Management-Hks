import { createClient } from '@supabase/supabase-js';
import L from 'leaflet'; // Import the Leaflet library

// Supabase configuration
const supabaseUrl = 'https://tdbircxvgthsgxeuhdir.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkYmlyY3h2Z3Roc2d4ZXVoZGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyMDc0MTEsImV4cCI6MjAwOTc4MzQxMX0.ROUGF5QvHPxhZlfBdmnW5XBogwm951o8P-lht4Pzy5U'; // Replace with your actual Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize the map
var map = L.map('map').setView([28.09623, 76.97395], 13);

// Add a tile layer (you can choose your preferred tile provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetch data from Supabase
fetchData();

async function fetchData() {
    // Replace 'your-actual-table-name' with the actual name of your Supabase table
    const { data, error } = await supabase.from('ragistrations').select('latitude, longitude, name, fname, contact, address, "pin code", disease');

    if (error) {
        console.error('Error fetching data from Supabase:', error.message);
    } else {
        // Loop through the data and create markers on the map
        data.forEach(location => {
            const popupContent = `
                <b>Name:</b> ${location.name} ${location.fname}<br>
                <b>Contact:</b> ${location.contact}<br>
                <b>Address:</b> ${location.address}<br>
                <b>Pin Code:</b> ${location['pin code']}<br>
                <b>Disease:</b> ${location.disease}
            `;
            
            L.marker([location.latitude, location.longitude]).addTo(map)
                .bindPopup(popupContent);
        });
    }
}
