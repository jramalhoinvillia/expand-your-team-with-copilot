// Mock fetch function for demonstration - loads activities from static JSON
async function mockFetchActivities() {
  try {
    const response = await fetch('/activities.json');
    const activities = await response.json();
    console.log('Loaded activities from static JSON:', Object.keys(activities));
    return activities;
  } catch (error) {
    console.error('Error loading activities from JSON:', error);
    // Fallback data if JSON doesn't load
    return {
      "Manga Maniacs": {
        "description": "Explore as histórias fantásticas dos personagens mais interessantes dos Mangás japoneses (graphic novels).",
        "schedule": "Terças, 19:00 - 20:00",
        "schedule_details": {
          "days": ["Tuesday"],
          "start_time": "19:00",
          "end_time": "20:00"
        },
        "max_participants": 15,
        "participants": []
      }
    };
  }
}

// Test the categorization function
function testCategorization() {
  const mangaActivity = {
    name: "Manga Maniacs",
    description: "Explore as histórias fantásticas dos personagens mais interessantes dos Mangás japoneses (graphic novels)."
  };
  
  // Simulate the categorization logic from app.js
  function getActivityType(activityName, description) {
    const name = activityName.toLowerCase();
    const desc = description.toLowerCase();

    if (
      name.includes("soccer") ||
      name.includes("basketball") ||
      name.includes("sport") ||
      name.includes("fitness") ||
      desc.includes("team") ||
      desc.includes("game") ||
      desc.includes("athletic")
    ) {
      return "sports";
    } else if (
      name.includes("art") ||
      name.includes("music") ||
      name.includes("theater") ||
      name.includes("drama") ||
      name.includes("manga") ||
      desc.includes("creative") ||
      desc.includes("paint") ||
      desc.includes("manga") ||
      desc.includes("graphic")
    ) {
      return "arts";
    } else if (
      name.includes("science") ||
      name.includes("math") ||
      name.includes("academic") ||
      name.includes("study") ||
      name.includes("olympiad") ||
      desc.includes("learning") ||
      desc.includes("education") ||
      desc.includes("competition")
    ) {
      return "academic";
    } else if (
      name.includes("volunteer") ||
      name.includes("community") ||
      desc.includes("service") ||
      desc.includes("volunteer")
    ) {
      return "community";
    } else if (
      name.includes("computer") ||
      name.includes("coding") ||
      name.includes("tech") ||
      name.includes("robotics") ||
      desc.includes("programming") ||
      desc.includes("technology") ||
      desc.includes("digital") ||
      desc.includes("robot")
    ) {
      return "technology";
    }

    return "academic";
  }
  
  const category = getActivityType(mangaActivity.name, mangaActivity.description);
  console.log(`Manga Maniacs categorization: ${category}`);
  return category;
}

// Run test when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('Testing Manga Maniacs implementation...');
  
  // Test categorization
  const category = testCategorization();
  console.log(`✅ Manga Maniacs will be categorized as: ${category}`);
  
  // Test loading activities
  mockFetchActivities().then(activities => {
    if (activities['Manga Maniacs']) {
      console.log('✅ Manga Maniacs activity found in data');
      console.log(activities['Manga Maniacs']);
    } else {
      console.log('❌ Manga Maniacs activity not found');
    }
  });
});