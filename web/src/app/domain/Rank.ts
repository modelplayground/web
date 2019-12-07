class LexoRank{
    bucket:Number
    marker: String
    rank: String

    Rank(b:Number,m:String,r:String){
        this.bucket = b
        this.marker = m
        this.rank = r
    }

    toString():String {
        return this.bucket+"|"+this.marker+"|"+this.rank;
    }
}