import { NuxtEjsConfig } from '../projects/nuxt'

export type EjsConfig = NuxtEjsConfig | null

export enum TemplateName {
  Nuxt = 'nuxt',
  Simple = 'simple'
}

export type ProgrammingLanguage = 'JavaScript' | 'TypeScript'
