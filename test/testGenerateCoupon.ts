// Import the coupon generation function from your module
import { generateCoupon } from '../lib/insecurity';  // Adjust this path as per your project structure

const discount = 20; // Example discount percentage

// Generate a coupon
const coupon = generateCoupon(discount);

console.log(`Generated Coupon: ${coupon}`);
