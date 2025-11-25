// Animated gradient background for contact page
class GradientAnimation {
    constructor() {
        this.canvas = document.getElementById('gradient-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.time = 0;
        this.colors = [
            { r: 253, g: 252, b: 250 }, // Milk white
            { r: 255, g: 240, b: 230 }, // Soft peach
            { r: 245, g: 240, b: 255 }, // Soft lavender
            { r: 240, g: 248, b: 255 }  // Soft blue
        ];
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate() {
        this.time += 0.003;
        
        // Create flowing gradient
        const gradient = this.ctx.createLinearGradient(
            0, 
            0, 
            this.canvas.width, 
            this.canvas.height
        );
        
        // Calculate color transitions based on time
        const color1Index = Math.floor(this.time) % this.colors.length;
        const color2Index = (color1Index + 1) % this.colors.length;
        const color3Index = (color1Index + 2) % this.colors.length;
        
        const t = this.time % 1;
        
        // Smoothly interpolate between colors
        const c1 = this.interpolateColor(this.colors[color1Index], this.colors[color2Index], t);
        const c2 = this.interpolateColor(this.colors[color2Index], this.colors[color3Index], t);
        
        gradient.addColorStop(0, `rgb(${c1.r}, ${c1.g}, ${c1.b})`);
        gradient.addColorStop(0.5, `rgb(${Math.floor((c1.r + c2.r) / 2)}, ${Math.floor((c1.g + c2.g) / 2)}, ${Math.floor((c1.b + c2.b) / 2)})`);
        gradient.addColorStop(1, `rgb(${c2.r}, ${c2.g}, ${c2.b})`);
        
        // Fill canvas with gradient
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Add subtle noise/texture
        this.addNoise();
        
        requestAnimationFrame(() => this.animate());
    }
    
    interpolateColor(color1, color2, factor) {
        return {
            r: Math.floor(color1.r + (color2.r - color1.r) * factor),
            g: Math.floor(color1.g + (color2.g - color1.g) * factor),
            b: Math.floor(color1.b + (color2.b - color1.b) * factor)
        };
    }
    
    addNoise() {
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const pixels = imageData.data;
        
        // Add very subtle noise
        for (let i = 0; i < pixels.length; i += 4) {
            const noise = (Math.random() - 0.5) * 8;
            pixels[i] += noise;     // Red
            pixels[i + 1] += noise; // Green
            pixels[i + 2] += noise; // Blue
        }
        
        this.ctx.putImageData(imageData, 0, 0);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new GradientAnimation();
    });
} else {
    new GradientAnimation();
}
