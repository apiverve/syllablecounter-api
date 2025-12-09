from setuptools import setup, find_packages

setup(
    name='apiverve_syllablecounter',
    version='1.1.12',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Syllable Counter is a tool for counting syllables in words and text. It uses the CMU Pronouncing Dictionary for accurate syllable counting with rule-based fallback for unknown words.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
