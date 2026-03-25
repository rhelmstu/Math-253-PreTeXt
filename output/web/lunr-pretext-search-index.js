var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "The General Setting",
  "body": " The General Setting  In crypto, we have two parties---Alice and Bob---and they trust each other. They also need to share some sensitive information. They cannot meet to share this data in person, so they must transmit it over some kind of communication channel. There is a major problem, however: this is an open channel , meaning that Alice and Bob must assume that anything sent over this line may be seen by anyone in the world. In particular, their adversary Eve---a notorious eavesdropper---is listening to all of their communications.   Eve listening to Alice and Bob   This is the main problem in cryptography: how can Alice and Bob safely exchange sensitive data, doing so in the presence of eavesdroppers? The idea of modern crypto is this: solve this problem by discovering ways of hiding secrets inside of very hard math problems. In other words, only by solving a certain math problem could Eve uncover Alice and Bob's secrets. If this problem is impossible to solve, then Eve cannot read their secrets. On the other hand, as allies, Alice and Bob will possess an added bit of information---called the key ---that will allow them to easily solve the problem, so they are free to read each other's secrets. Without the key, Eve cannot read anything. What I have just described is the model for symmetric or private key crypto. There is another type of crypto we will encounter later in the semester known as asymmetric or public key crypto.   This seems to be the perfect solution to the main problem of secure secrecy. However, it turns out that generating the right kind of \"hard\" math problems is incredibly difficult. This class is about the kind of mathematics used in modern crypto. We will start with some classical encryption schemes, systems that are easily breakable. In fact, you will be breaking some of them yourself. So why study a broken system? Because if you can understand what makes a scheme insecure, you can start to understand how to improve it. By the end of the semester, you will completely understand several of the algorithms used in actual modern day crypto.  To discuss all this interesting stuff, we need some language. (The best way to understand all of this is through an example, which we'll get to shortly.) Suppose Alice needs to send to Bob an important yet secret message and they have agreed to use a particular encryption scheme. The scheme that they use is called the algorithm for encryption. Alice's message in its raw, readable format is called the plaintext . We don't want Eve to know this. Now, the plaintext message was structured in some way as a string of symbols. The set of symbols we are allowed to use in our messages is the alphabet of our encryption scheme.  Next she selects a secret key  , and encrypts her plaintext message into an unreadable message using the key . This unreadable, coded message is called the ciphertext , and it is also structured out of the same alphabet. In a good encryption scheme, knowledge of the ciphertext is not enough to reveal the true plaintext.  Alice then transmits the ciphertext message across the open line. Bob receives the ciphertext, but Bob also possesses the same secret key . Bob uses this key to decrypt the ciphertext message back into the plaintext. Hence Bob can recover the plaintext, but since she does not possess the key, Eve cannot.  Let's pause and look at a concrete example of an encryption scheme.  "
},
{
  "id": "sec-section-name-6",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algorithm plaintext alphabet "
},
{
  "id": "sec-section-name-7",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "key ciphertext "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
