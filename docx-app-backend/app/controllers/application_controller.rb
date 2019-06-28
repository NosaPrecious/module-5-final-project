class ApplicationController < ActionController::API

    def secret_key
      "w4ddvp"
    end

    def encode(payload, algorithm ='HS256')
      JWT.encode(payload, secret_key, algorithm)
    end

    def decode(token)
      JWT.decode(token, secret_key, true, {algorithm: 'HS256'})[0]
    end

end
