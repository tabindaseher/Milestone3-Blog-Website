import { type SchemaTypeDefinition } from 'sanity'
import {skills} from '../skills';
import { author } from '../author';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills , author ],
}
