import { project } from './project'
// import { post, tag } from './post'
import { page } from './page'
import { user } from './user'

export default {
  // ...post,
  // ...tag,
  ...project,
  ...page,
  ...user,
}
