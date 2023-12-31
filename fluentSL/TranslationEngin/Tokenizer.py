import nltk
from nltk.corpus import words
import re

nltk.download('punkt')
nltk.download('words')
nltk.download('maxent_ne_chunker')
nltk.download('words')
nltk.download('averaged_perceptron_tagger')

text = "heta mata enna i wont come tomorrow Namal"

english_words = set(words.words())

sentence_pattern = r'[.?!]'

sentences = re.split(sentence_pattern, text)

sentences_tokens_eng = []
sentences_tokens_sin = []
names = []

for sentence in sentences:
    words = nltk.word_tokenize(sentence)
    for word in words:
        if word.isalnum():
            if word.lower() in english_words:
                sentences_tokens_eng.append(word)
            else:
                sentences_tokens_sin.append(word)

    named_entities = nltk.ne_chunk(nltk.pos_tag(words))
    for entity in named_entities:
        if isinstance(entity, nltk.Tree):
            name = " ".join([word for word, tag in entity.leaves()])
            names.append(name)

sentences_tokens_eng = [word for word in sentences_tokens_eng if word not in names]
sentences_tokens_sin = [word for word in sentences_tokens_sin if word not in names]

print("English words in the text (excluding names):", sentences_tokens_eng)
print("Sinhala words in the text (excluding names):", sentences_tokens_sin)
print("Names in the text:", names)
