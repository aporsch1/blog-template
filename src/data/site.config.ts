interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Abraham Porschet', // Site author
	title: 'Unbecoming', // Site title.
	description: 'Writing about literature, art, life', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	paginationSize: 6 // Number of posts per page
}
