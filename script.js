// Video choice logic
function makeChoice(choice) {
    const video = document.getElementById('lesson-video');
    if (choice === 'high') {
        alert('The catapult launches high! Gravity pulls it down slower.');
        video.currentTime = 10; // Simulate outcome
    } else if (choice === 'low') {
        alert('The catapult launches low! Gravity acts faster.');
        video.currentTime = 5; // Simulate outcome
    }
}

// Enhanced AI-like responses for Theja
function askTheja() {
    const question = document.getElementById('question').value.toLowerCase();
    const response = document.getElementById('response');
    let answer = '';

    if (question.includes('gravity')) {
        if (question.includes('force')) {
            answer = 'Gravity is a fundamental force in nature that attracts objects toward each other. It’s what keeps us on the ground and makes things fall. The strength of this force depends on the mass of the objects and the distance between them—bigger masses pull harder, and the closer they are, the stronger the pull!';
        } else if (question.includes('acceleration') || question.includes('speed')) {
            answer = 'On Earth, gravity causes objects to accelerate downward at 9.8 meters per second squared. That means every second an object falls, it speeds up by 9.8 meters more. Drop a ball, and after 1 second, it’s moving at 9.8 m/s; after 2 seconds, 19.6 m/s—pretty fast, right?';
        } else if (question.includes('orbit') || question.includes('planet')) {
            answer = 'Gravity keeps planets and moons in orbit! It pulls the Moon toward Earth, but the Moon’s speed keeps it circling instead of crashing. The same happens with Earth around the Sun—gravity is like an invisible string holding everything in place across the solar system!';
        } else if (question.includes('newton')) {
            answer = 'Isaac Newton figured out gravity with his Law of Universal Gravitation. He said every object attracts every other object with a force that’s stronger for bigger masses and weaker the farther apart they are. That’s why a catapult stone falls back to Earth—it’s attracted to our planet’s huge mass!';
        } else if (question.includes('einstein') || question.includes('relativity')) {
            answer = 'Albert Einstein took gravity further with General Relativity. He said gravity isn’t just a force—it’s the bending of space and time by massive objects. Think of Earth like a bowling ball on a trampoline, making a dip that pulls things toward it. Cool, huh?';
        } else if (question.includes('catapult')) {
            answer = 'In our catapult lesson, gravity pulls the launched object back down. Launch it high, and it takes longer to fall because it has more distance to cover against gravity’s pull. Launch it low, and gravity brings it down fast since it’s closer to the ground!';
        } else {
            answer = 'Gravity is the force that attracts objects toward each other—it’s why we don’t float away! On Earth, it pulls things down at 9.8 m/s². It’s what makes apples fall, planets orbit, and your catapult shots land. Want to know more? Ask about force, acceleration, orbits, Newton, or Einstein!';
        }
    } else if (question.includes('catapult') && !question.includes('gravity')) {
        answer = 'A catapult uses energy to launch objects into the air. Once launched, gravity takes over and pulls them back down. Try launching it low to see how fast gravity acts, or high to see it fight gravity longer!';
    } else {
        answer = 'Hmm, I’m not sure about that. Ask me about gravity or the catapult—I can tell you tons about how gravity works!';
    }

    response.textContent = `Theja says: "${answer}"`;
}

// Initialize Sketchfab viewer for Theja
function initSketchfab() {
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = 'https://sketchfab.com/models/<your-model-id>/embed'; // Replace <your-model-id>
    document.getElementById('sketchfab-embed').appendChild(iframe);
}

// Video choice logic
function makeChoice(choice) {
    const video = document.getElementById('lesson-video');
    if (choice === 'high') {
        alert('The catapult launches high! Gravity pulls it down slower.');
        video.currentTime = 10; // Simulate high launch outcome
    } else if (choice === 'low') {
        alert('The catapult launches low! Gravity acts faster.');
        video.currentTime = 5; // Simulate low launch outcome
    }
}

// AI-like responses for Theja
function askTheja() {
    const question = document.getElementById('question').value.toLowerCase();
    const response = document.getElementById('response');
    let answer = '';

    if (question.includes('gravity')) {
        answer = 'Imagine dropping a ball from a tree. Gravity pulls it down at 9.8 m/s². For example, if you launch your catapult high, it takes longer to fall because it has more distance to cover!';
    } else if (question.includes('catapult')) {
        answer = 'A catapult uses energy to launch objects. Gravity pulls them back down. Try launching it low to see how fast it hits the ground!';
    } else {
        answer = 'Hmm, I’m not sure about that. Ask me about gravity or the catapult!';
    }

    response.textContent = `Theja says: "${answer}"`;
}

// Load Sketchfab on page start
window.onload = initSketchfab;