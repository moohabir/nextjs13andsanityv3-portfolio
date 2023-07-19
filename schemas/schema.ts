import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './blockContent';
import post from './post';
import author from './author';
import about from './about';
import hero from './hero';
import project from './project';
import skills from './skills';
import service from './service';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, about, hero, project, skills, service, blockContent],
};
