slush-client
=============

> A [slush](http://klei.github.io/slush/) generator to create web apps.

## Installation

Install `slush-client` globally:

```bash
git clone https://github.com/jcastelain/packlink-slush-client.git
cd packlink-slush-client
npm install -g .   # depending on your OS you might need to use sudo
```

Remember to install `slush` globally as well, if you haven't already:

```bash
npm install -g slush
```

## Debian requirements
Debian sistem operator needs has installed nodejs version: `v0.10.32`

```bash
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs
```

## Usage

Create a new folder for your project:

```bash
mkdir example
```

Run the generator from within the new folder:

```bash
cd example

slush client
```

## License

MIT
