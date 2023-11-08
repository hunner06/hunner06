export class School {
    constructor(
      public id: number,
      public name: string,
      public city: string,
      public state: string
    ) {}
  }
  
  export class Class {
    constructor(
      public id: number,
      public name: string,
      public teacher: string,
      public schoolId: number
    ) {}
  }
  
  export class Student {
    constructor(
      public id: number,
      public name: string,
      public age: number,
      public classId: number
    ) {}
  }

  export class TestModel {
    constructor(
      public id: number,
      public name: string,
      public age: string,
      public other: string
    ) {}
  }

  interface JokeFlags {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  }
  
  interface SingleJoke {
    category: string;
    type: "single";
    joke: string;
    flags: JokeFlags;
    id: number;
    safe: boolean;
    lang: string;
  }
  
  interface TwoPartJoke {
    category: string;
    type: "twopart";
    setup: string;
    delivery: string;
    flags: JokeFlags;
    id: number;
    safe: boolean;
    lang: string;
  }
  
  type Joke = SingleJoke | TwoPartJoke;
  
  export interface JokeResponse {
    error: boolean;
    amount: number;
    jokes: Joke[];
  }

  export interface FinancialAid {
    scholarships: string[];
    grants: string[];
    loanOptions: string[];
  }
  
  export interface CareerAnalysis {
    professions: string[];
    outlook: string; // Summary of career outlook
  }
  
  export interface School {
    id: number;
    name: string;
    program: string;
    cost: number;
    housingOpportunities: boolean;
    servicesProvided: string[];
    suitableFor: string[];
    financialAid: FinancialAid;
    careerAnalysis: CareerAnalysis;
    prerequisites: Prerequisite[];
    programEligibility: string;
    resources: string[];
  }
  
  export interface Prerequisite {
    description: string;
    fulfilled: boolean;
  }
  
  


  