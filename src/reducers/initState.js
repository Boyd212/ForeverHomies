export const initFilterState = {
    staticFilter: 'all',
    dinamicFilter: '',
};

export const initPetState = {
    animals:
    [
        {
            id: ,
            organiation_id: '',
            url: '',
            type: '',
            species: '',
            breeds {
                primary: '',
                secondary: null,
                mixed: false,
                unknown: false,
            },
            colors: {
                primary: null,
                secondary: null,
                tertiary: null,
            },
            age: '',
            gender: '',
            size: '',
            coat: null,
            attributes: {
                spayed_neutered: false,
                house_trained: true,
                declawed: null,
                special_needs: true,
                shots_current: false,
            },
            environment: {
                children: false,
                dogs: false,
                cats: true,
            },
            tags: [
                '',
                '',
            ],
            name: 'Spot',
            description: '',
            photos: [
                {
                    small: '',
                    medium: ''.
                },
            ],
            videos: [
                {
                    embed: '',
                },
            ],
            status: 'adoptable',
            published_at: '',
            contact: {
                email: 'petfindertechsupport@gmail.com',
            phone: '111-333-5555, 222-333-5555, 333-333-5353, 111-333-2222',
            address: {
                address1: 'Test address 1',
                address2: 'Test address 2',
                city: 'Houston',
                state: 'TX',
                postcode: '77070',
                country: 'US',
                },
            },
        },
    ],
};