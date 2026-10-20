from setuptools import setup, find_packages

setup(
    name='apiverve_syllablecounter',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Syllable Counter counts syllables across any submitted text string up to 500 characters. It returns the total syllable count, total word count, and average syllables per word.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/syllablecounter?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
