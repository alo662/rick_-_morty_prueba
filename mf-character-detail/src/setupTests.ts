import "@testing-library/jest-dom";

// Polyfill para TextEncoder/TextDecoder en Jest
import { TextEncoder, TextDecoder } from "util";

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder as any;
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder as any;
}
