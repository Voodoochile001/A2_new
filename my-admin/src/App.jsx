import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from "react-admin";
import {createTrailbaseProvider} from "./ra-trailbase.js";
import {UserList, UserEdit, UserCreate, UserShow} from "./User.jsx"
import {AuthorEdit, AuthorList} from "./Author"
import { GenreList, GenreEdit, GenreCreate, GenreShow } from "./Genre.jsx";
import {radiantLightTheme, radiantDarkTheme } from 'react-admin';

const TRAILBASE_URL = "https://urban-waffle-97qv9pj4px6g3xvv6-4000.app.github.dev/"
const {dataProvider,authProvider} = await createTrailbaseProvider(TRAILBASE_URL)

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}
        theme={radiantLightTheme}
        darkTheme={radiantDarkTheme}>
    <Resource name="User" list={UserList} edit = {UserEdit} create = {UserCreate} show = {UserShow}/>
    <Resource name="Author" list={AuthorList} edit = {AuthorEdit}/>
    <Resource name="Genre" list={GenreList} edit = {GenreEdit} create = {GenreCreate} show = {GenreShow}/>
  </Admin>
);

export default App;