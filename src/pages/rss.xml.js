import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Student Privacy Blog',
        description: 'Blog posts about student privacy',
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob('./blog/*.mdx')
        ),
        customData: `<language>en-us</language>`,
    });
}