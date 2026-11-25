export default class HashMap {
    constructor(loadFactor=0.75, capacity=16) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.threshold = this.capacity * this.loadFactor;
        this.buckets = Array.from(
                        { length: this.capacity },
                        () => []
                    );
    } 

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) 
    {
        let hashvalue = this.hash(key);
        let idx = hashvalue % this.capacity;
        let bucket = this.buckets[idx];

        // Check if key already exists
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        // Insert new key if below threshold
        if (this.length() < this.threshold) {
            bucket.push([key, value]);
        } else {
            console.log("Capacity full");
        }
    }

    get(key)
    {
        if (this.has(key))
        {
            // get the bucket 
             let idx = this.hash(key) % this.capacity
            // get the bucket where key is stored
            let bucket = this.buckets[idx]

            for (let i = 0; i< bucket.length; i++)
            {
                // compare the key of each key value pair 
                if (bucket[i][0]==key)
                {
                    // return the value
                    return bucket[i][1]
                }
            }

        }
    }

    has(key)
    {  
        let idx = this.hash(key) % this.capacity;
        let bucket = this.buckets[idx];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return true;
            }
        }

        return false;
    }

    remove(key)
    {
       
        if (this.has(key))
        {
            let idx = this.hash(key) % this.capacity
            // get the bucket where key is stored
            let bucket = this.buckets[idx]

            // find the matching key
            for (let i = 0; i< bucket.length; i++)
            {
                // compare the key of each key value pair 
                if (bucket[i][0]==key)
                {
                    // if key found then remove the key value pair from hashmap
                    this.buckets[idx].splice(i,1)
                    return
                }
            }
        }
        else{
            console.log("No such key available")
        }
    }

    length()
    {
        let total_length = 0;
        for (let i = 0; i < this.buckets.length; i++)
        {
            // get each bucket length
            let bucket_length = this.buckets[i].length
            total_length += bucket_length
        }
        return total_length;
    }

    clear()
    {
        // reset the hashmap or clear the hash map
        this.buckets = Array.from(
                        { length: this.capacity },
                        () => []
                    );
    }

    keys()
    {
        let key_list = []
        // get the bucket set 
        let buckets = this.buckets;
        for (let i = 0; i< buckets.length; i++)
        {
            // loop through each bucket that exists in buckets
            let bucket = buckets[i]

            for (let j = 0; j< bucket.length; j++)
            {
                // key_value pair 
                let pair = bucket[j]
                let key = pair[0]
                key_list.push(key)
            }
        }
        return key_list
    }

    values()
    {
        let value_list = []
        // get the bucket set 
        let buckets = this.buckets;
        for (let i = 0; i< buckets.length; i++)
        {
            // loop through each bucket that exists in buckets
            let bucket = buckets[i]

            for (let j = 0; j< bucket.length; j++)
            {
                // key_value pair 
                let pair = bucket[j]

                // values 
                let value = pair[1]
                value_list.push(value)
            }
        }
        return value_list
    }

    entries()
    {
        let entry_list = []
        let bucket_list = this.buckets

        for (let i = 0; i< bucket_list.length; i++)
        {
            let bucket = bucket_list[i]
                // loop through the bucket
                for (let j = 0; j < bucket.length; j++)
                {
                    let pair = bucket[j]
                    entry_list.push(pair)
                }
            
        }
        return entry_list
    }

}
