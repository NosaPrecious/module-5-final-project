class CreateUserDocs < ActiveRecord::Migration[5.2]
  def change
    create_table :user_docs do |t|
      t.integer :user_id
      t.integer :doc_id
      t.boolean :has_owner
      t.boolean :write_access
      t.boolean :read_access
      t.boolean :modify_access
      t.boolean :remove_access

      t.timestamps
    end
  end
end
