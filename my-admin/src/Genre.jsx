import { DataTable, List } from 'react-admin';
import { Edit, SimpleForm, TextInput, Create } from 'react-admin';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const GenreList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="GenreName" />
        </DataTable>
    </List>
);



export const GenreEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="GenreName" />
        </SimpleForm>
    </Edit>
);

export const GenreCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="GenreName" />
        </SimpleForm>
    </Create>
);



export const GenreShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="GenreName" />
        </SimpleShowLayout>
    </Show>
);