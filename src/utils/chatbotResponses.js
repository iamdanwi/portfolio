export const chatbotResponses = {
  greetings: [
    "Hi! I'm Dainwi's assistant. How can I help you today?",
    "Hello! Welcome to Dainwi's portfolio. What would you like to know?",
  ],
  skills: [
    "Dainwi is proficient in: React.js, Next.js, Node.js, MongoDB, PostgreSQL, Python, Java, C++, and more. Would you like specific details about any technology?",
  ],
  experience: [
    "Dainwi has experience in full-stack development, with expertise in MERN stack and modern web technologies.",
  ],
  contact: [
    "You can reach Dainwi at ia5danwichoudhary@gmail.com or +91 9905308845. Would you like me to share more contact details?",
  ],
  projects: [
    "Dainwi has worked on various projects including e-commerce platforms, task management systems, and more. Would you like to know about a specific project?",
  ],
  availability: [
    "Dainwi is available for freelance work and remote positions. Would you like to discuss a potential project?",
  ],
  default: [
    "I'm not sure about that. Would you like to contact Dainwi directly?",
    "Let me connect you with Dainwi for more specific information.",
  ]
};

export function getChatbotResponse(input) {
  const lowercaseInput = input.toLowerCase();
  
  if (lowercaseInput.includes('hi') || lowercaseInput.includes('hello')) {
    return chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)];
  }
  if (lowercaseInput.includes('skill') || lowercaseInput.includes('technology')) {
    return chatbotResponses.skills[0];
  }
  if (lowercaseInput.includes('experience') || lowercaseInput.includes('work')) {
    return chatbotResponses.experience[0];
  }
  if (lowercaseInput.includes('contact') || lowercaseInput.includes('email')) {
    return chatbotResponses.contact[0];
  }
  if (lowercaseInput.includes('project')) {
    return chatbotResponses.projects[0];
  }
  if (lowercaseInput.includes('available') || lowercaseInput.includes('hire')) {
    return chatbotResponses.availability[0];
  }
  
  return chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)];
} 