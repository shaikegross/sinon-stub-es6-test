import { createGreeting } from "./greeter";

export const greetWithTime = (name: string) =>  {
    const greeting = createGreeting(name);
    return `${greeting}, it's ${new Date().toTimeString()}`
}