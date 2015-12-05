class Api::TracksController < ApplicationController

  def index
      @tracks = Track.order('created_at DESC').all
      render json: @tracks
    end

    def create
      @track = Track.new(track_params)
      if @track.save
        render json: @track
      else
        render json: @track.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    ROLL_FILTER = {:roll => [:timeSlice, :notes => []]}

    def track_params
      params.require(:track).permit(:name, ROLL_FILTER)
    end

end
