require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all;
Doc.destroy_all;
UserDoc.destroy_all;

@my_uri = "/Users/nosaokundaye/Development/flatiron-software-engineering/front-end-development/module5-redux/document-collabo/module-5-final-project/mydocs";

@user= "user";
@doc= "doc";
@i= 1;
@j= 1;

5.times do
   @n_user= User.create!([{first_name: Faker::Name.first_name,last_name: Faker::Name.last_name, email: Faker::Internet.email, username: Faker::Lorem.characters(4), password: "abc123"}]);
  @i+=1;
end

20.times do
    file_namer = "file#{@i}"
   @n_doc = Doc.create!([{
    filename: Faker::File.unique.file_name(@my_uri, file_namer, "doc", "/"), content_type: "text/plain",
    data: Faker::Lorem.unique.sentence(150, true, 4)}]);
  @i+=1;
end

20.times do
      srand(1)
    x= rand(1...5);
    y= rand(1..20)
    random_boolean= [true, false].sample;
    n_user = User.find(x).id;
    n_doc = Doc.find(y).id;
  # byebug
  if (!UserDoc.find_by(user_id: n_user))
    if random_boolean
      UserDoc.create!([{user_id: n_user,
                      doc_id: n_doc,
                      has_owner: true,
                      read_access: true,
                      write_access: true,
                      modify_access: true,
                      remove_access: true}]);
                      @j+= 1;
    else
      random_other_user_boolean = [true, false].sample
      UserDoc.create!([{user_id: n_user,
                        doc_id: n_doc,
                        has_owner: false,
                        read_access: random_other_user_boolean,
                        write_access:  random_other_user_boolean,
                        modify_access: random_other_user_boolean,
                        remove_access: random_other_user_boolean}]);
                        @j+= 1;
    end
  end
end
