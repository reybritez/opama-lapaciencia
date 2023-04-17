import os
from django.shortcuts import render
import markdown


def Docs(request):
    # Read the Markdown file
    markdown_file = os.path.join('README.md')
    with open(markdown_file, 'r') as file:
        markdown_text = file.read()
    # Convert the Markdown text to HTML
    content = markdown.markdown(markdown_text)
    # Render the HTML in the template
    return render(request, 'applications/content/docs.html', {'content': content})


def Opama_Mateo_Torres(request):
    # Read the Markdown file
    markdown_file = os.path.join(os.path.dirname(__file__), 'cms', 'opama_mateo_torres.md')
    with open(markdown_file, 'r') as file:
        markdown_text = file.read()
    # Convert the Markdown text to HTML
    content = markdown.markdown(markdown_text)
    # Render the HTML in the template
    return render(request, 'applications/content/opama_mateo_torres.html', {'content': content})


def Opama_Lucho_Benitez(request):
    # Read the Markdown file
    markdown_file = os.path.join(os.path.dirname(__file__), 'cms', 'opama_lucho_benitez.md')
    with open(markdown_file, 'r') as file:
        markdown_text = file.read()
    # Convert the Markdown text to HTML
    content = markdown.markdown(markdown_text)
    # Render the HTML in the template
    return render(request, 'applications/content/opama_lucho_benitez.html', {'content': content})

def Opama_Karl_Niebuhr(request):
    # Read the Markdown file
    markdown_file = os.path.join(os.path.dirname(__file__), 'cms', 'opama_karl_niebuhr.md')
    with open(markdown_file, 'r') as file:
        markdown_text = file.read()
    # Convert the Markdown text to HTML
    content = markdown.markdown(markdown_text)
    # Render the HTML in the template
    return render(request, 'applications/content/opama_karl_niebuhr.html', {'content': content})
