import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

var app = firebase.initializeApp({
  apiKey: 'AIzaSyCxUjim-n2kFbAxX2QApXjCr_PgaWVzfxQ',
  authDomain: 'whiskey-notes.firebaseapp.com',
  databaseURL: 'https://whiskey-notes.firebaseio.com',
  projectId: 'whiskey-notes',
  storageBucket: 'whiskey-notes.appspot.com',
  messagingSenderId: '32005084631'
})

var db = firebase.database(app)
var base = Rebase.createClass(db)

export default base
