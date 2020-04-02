class Todo {
    constructor(text){
        this._text = text;//（外部からのアクセスは基本的には禁止）
        this._completed = false;//初期値はfalse
    }

    get text(){
        return this._text;
    }

    hasCompleted(){
        return this._completed;
    }

    toggle(){//真偽値の反転、toggleを実行後、trueであれば反転したfalseが代入される
         this._completed　= !this._completed;
    }
}

export default Todo;