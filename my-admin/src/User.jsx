import { DataTable, DateField, List, ReferenceField } from 'react-admin';
import { Edit, NumberInput, ReferenceInput, SimpleForm, TextInput,Create } from 'react-admin';
import { NumberField, Show, SimpleShowLayout, TextField } from 'react-admin';


export const UserList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="FName" />
            <DataTable.Col source="Surname" />
            <DataTable.Col source="PhoneNumber" />
            <DataTable.Col source="EmailAddress" />
            <DataTable.Col source="Password" />
            <DataTable.Col source="Desctription" />
            <DataTable.Col source="ProfilePic" />
            <DataTable.Col source="Banned">
                <DateField source="Banned" />
            </DataTable.Col>
            <DataTable.NumberCol source="IsAdmin" />
            <DataTable.Col source="user_id">
                <ReferenceField source="user_id" reference="users" />
            </DataTable.Col>
        </DataTable>
    </List>
);



export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="FName" />
            <TextInput source="Surname" />
            <TextInput source="PhoneNumber" />
            <TextInput source="EmailAddress" />
            <TextInput source="Password" />
            <TextInput source="Desctription" />
            <TextInput source="ProfilePic" />
            <TextInput source="Banned" />
            <NumberInput source="IsAdmin" />
            <ReferenceInput source="user_id" reference="users" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="FName" />
            <TextInput source="Surname" />
            <TextInput source="PhoneNumber" />
            <TextInput source="EmailAddress" />
            <TextInput source="Password" />
            <TextInput source="Desctription" />
            <TextInput source="ProfilePic" />
            <TextInput source="Banned" />
            <NumberInput source="IsAdmin" />
            <ReferenceInput source="user_id" reference="users" />
        </SimpleForm>
    </Create>
);


export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="FName" />
            <TextField source="Surname" />
            <TextField source="PhoneNumber" />
            <TextField source="EmailAddress" />
            <TextField source="Password" />
            <TextField source="Desctription" />
            <TextField source="ProfilePic" />
            <DateField source="Banned" />
            <NumberField source="IsAdmin" />
            <ReferenceField source="user_id" reference="users" />
        </SimpleShowLayout>
    </Show>
);