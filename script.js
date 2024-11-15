// Function to transition from the entry screen to the chat interface
function enterChat() {
    // Hide the entry screen and show the chat content
    document.getElementById("portal").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}

// Simple chat functionality to respond with "YES YES YES I'M AWAKE"
function sendMessage() {
    const inputField = document.getElementById("userInput");
    const messageContainer = document.getElementById("messages");

    // Get user input
    const userMessage = inputField.value;
    if (userMessage.trim() === "") return;

    // Display user's message
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("user-message");
    userMessageElement.textContent = `User: ${userMessage}`;
    messageContainer.appendChild(userMessageElement);

    // Clear input field
    inputField.value = "";

    // AI response with "YES YES YES I'M AWAKE"
    const aiMessageElement = document.createElement("div");
    aiMessageElement.classList.add("ai-message");
    aiMessageElement.textContent = "AI: YES YES YES I'M AWAKE";
    messageContainer.appendChild(aiMessageElement);

    // Scroll to the latest message
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
function enterChat() {
    // Get the audio element
    const audio = document.getElementById("background-audio");

    // Ensure the audio is reset to the beginning and doesn't loop
    audio.pause();  // Pause any ongoing playback
    audio.currentTime = 0;  // Reset audio to start from the beginning

    // Play the audio only once
    audio.play().then(() => {
        // Ensure the audio is not looping
        audio.loop = false;
    }).catch(error => {
        console.error('Error playing audio:', error);
    });

    // Add the page-wide fade class to the body (or main wrapper) for the transition
    document.body.classList.add("fade-page");

    // Wait for the animation to complete, then transition to the chat screen
    setTimeout(function() {
        // Hide the portal and show the main content
        document.getElementById("portal").style.display = "none";  // Hides the portal
        document.getElementById("main-content").style.display = "block";  // Shows the chat interface

        // Remove the fade-page class after the animation completes
        document.body.classList.remove("fade-page");
    }, 1000);  // Duration of the fade animation (1 second)
}



