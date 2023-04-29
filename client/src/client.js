import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient ({
    projectId: "qb29x4zc",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "sk7BcbgS3L3IT1nnwQOLKHPOPLmapsfD6FZANPR7w365i0LN4cslCsRweQzzyZbFMVgX7ydLmJLWykN9zTVyPhi0r8oAp0VNlIFKd3N5rwlhyGQEggiNLIgcZCLItruMPH55m5VEoEaSWSLosL6tlEH8q078bETVaZ5UYImDhtRUXAZpch4e"
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)