import { Edit, SimpleForm, TextInput } from 'react-admin';
import { DataTable, DateField, List } from 'react-admin';
import { SearchInput, SelectInput } from 'react-admin';

export const AuthorEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />AuthorEdit
            <TextInput source="AuthorName" />
            <TextInput source="AuthorSurname" />
            <TextInput source="Desctription" />
            <TextInput source="Password" />
            <TextInput source="Email" />
            <TextInput source="PhoneNum" />
            <TextInput source="profile_picture" />
            <TextInput source="banned" />
        </SimpleForm>
    </Edit>
);





export const AuthorFilters = [
  <TextInput label="Searchy Namey" source="AuthorName" alwaysOn/>,
    <SelectInput label="selecty Namey"
    source="AuthorName"
    resettable
    choices={[
        {id: "Louis", name:"Louis"},
        {id: "Rebecca", name:"Rebecca"}
    ]}
    alwaysOn
    />
];

export const AuthorList = () => (
    <List filters={AuthorFilters}>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="AuthorName" />
            <DataTable.Col source="AuthorSurname" />
            <DataTable.Col source="Desctription" />
            <DataTable.Col source="Password" />
            <DataTable.Col source="Email" />
            <DataTable.Col source="PhoneNum" />
            <DataTable.Col source="profile_picture" />
            <DataTable.Col source="banned">
                <DateField source="banned" />
            </DataTable.Col>
        </DataTable>
    </List>

);





export const PostList = () => (
    <List filters={postFilters}>
        ...
    </List>
);