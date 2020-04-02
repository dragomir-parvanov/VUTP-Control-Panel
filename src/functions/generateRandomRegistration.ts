import _ from "lodash";
import randomPicker from "./randomPicker";
import RegistrationModel from "../models/RegistrationModel";

export default function generateRandomRegistration(): RegistrationModel {
  const name = getRandomName();
  const age = Math.floor(Math.random() * 90);
  const registration: RegistrationModel = {
    name: getRandomName(),
    phoneNumber: "087" + Math.floor(Math.random() * 100000),
    age: Math.floor(Math.random() * 90),
    country: getRandomCountry(),
    email: createRandomEmail(name, age)
  };
  return registration;
}

export function getRandomName(): string {
  const options = ["Ivan", "Drago", "Petko", "Yordan", "Radostin", "Maria", "Samuil"];
  return randomPicker(options);
}
export function getRandomCountry(): string {
  const options = ["Bulgaria", "Serbia", "Macedonia", "Greece", "Romania", "Turkey"];
  return randomPicker(options);
}

export function createRandomEmail(name: string, age: number): string {
  const emailProviderOptions = ["abv.bg", "gmail.com", "yahoo.com", "utp.bg"];
  return `${name}${age}_${Math.floor(Math.random() * 30)}@${randomPicker(emailProviderOptions)}`;
}
