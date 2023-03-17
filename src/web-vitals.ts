import { onCLS, onFID, onLCP } from "web-vitals";

// function sendToAnalytics(metric: any) {
//   const body = JSON.stringify(metric);
//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
//   (navigator.sendBeacon && navigator.sendBeacon("/analytics", body)) ||
//     fetch("/analytics", { body, method: "POST", keepalive: true });
// }

function reportWebVitals() {
//   onCLS(sendToAnalytics);
//   onFID(sendToAnalytics);
//   onLCP(sendToAnalytics);

  onCLS(console.log);
  onFID(console.log);
  onLCP(console.log);
}

export default reportWebVitals;
