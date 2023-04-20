from django.contrib import sitemaps
from django.urls import reverse

# SiteMap
class SiteMap(sitemaps.Sitemap):
    """
    Sitemap. url 'website:landing_page' this adds the URL to the sitemap
    """
    def items(self):
        return [
            # Website
            'website:landing_page',
            # API
            'api:tu_bus_de_la_suerte',
            'api:biggest_spender',
            # Applications
            'website:tu_bus_de_la_suerte',
            'website:biggest_spender',
            # Content
            'content:opama_mateo_torres',
            'content:opama_lucho_benitez',
            'content:opama_karl_niebuhr',
            'content:docs'
        ]
    def location(self, item):
        return reverse(item)
